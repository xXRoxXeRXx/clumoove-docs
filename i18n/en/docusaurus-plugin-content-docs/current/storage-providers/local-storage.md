---
id: local-storage
title: Local Filesystem Storage
sidebar_position: 11
---

# Local Filesystem Storage

Clumoove can read and write files directly on the server's local storage.

:::note Tenant Isolation
On Unix hosts, operations are scoped inside `LOCAL_STORAGE_ROOT/users/<user-id>` using `O_NOFOLLOW` openat traversal to prevent symlink race conditions.
:::
