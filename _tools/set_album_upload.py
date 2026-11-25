#!/usr/bin/env python3
"""One-time setup for the hidden uploader on the Album page (click the "Album" title).

    python3 _tools/set_album_upload.py

Prompts (nothing is echoed or stored in shell history) for:
  * a GitHub fine-grained personal access token for this repo only, with
    Repository permissions -> Contents: Read and write (and nothing else);
  * the password you want to type on the page.
It encrypts the token with the password (PBKDF2-SHA256 600k rounds -> AES-256-GCM) and writes only
the ciphertext to _data/album_upload.json. Commit that file; the password and the token are never written.
Re-run it to change the password or rotate the token. Delete the file to switch the uploader off.

Lives in _tools/ so Jekyll does not publish it.
"""
import base64
import getpass
import json
import os
import sys
from pathlib import Path

from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

REPO = Path(__file__).resolve().parent.parent
OUT = REPO / "_data" / "album_upload.json"
GITHUB_REPO = "AlbertHX86/AlbertHX86.github.io"
BRANCH = "master"
ITER = 600_000


def b64(b):
    return base64.b64encode(b).decode()


def main():
    # ALBUM_TOKEN / ALBUM_PASSWORD may be set instead of the prompts (e.g. when there is no terminal).
    token = (os.environ.get("ALBUM_TOKEN") or getpass.getpass("GitHub token: ")).strip()
    if not token.startswith(("github_pat_", "ghp_")):
        sys.exit("that does not look like a GitHub token")
    pw = os.environ.get("ALBUM_PASSWORD")
    if pw is None:
        pw = getpass.getpass("Upload password: ")
        if pw != getpass.getpass("Repeat password: "):
            sys.exit("passwords differ")
    if len(pw) < 8:
        sys.exit("password too short")

    salt, iv = os.urandom(16), os.urandom(12)
    key = PBKDF2HMAC(hashes.SHA256(), 32, salt, ITER).derive(pw.encode())
    ct = AESGCM(key).encrypt(iv, token.encode(), None)  # ciphertext || 16-byte tag, what WebCrypto expects
    OUT.write_text(json.dumps({"repo": GITHUB_REPO, "branch": BRANCH, "iter": ITER,
                               "salt": b64(salt), "iv": b64(iv), "ct": b64(ct)}, indent=2) + "\n")
    print(f"wrote {OUT.relative_to(REPO)} (ciphertext only). Commit and push it.")


if __name__ == "__main__":
    main()
