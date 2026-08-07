---
id: local-storage
title: Local Filesystem Storage
sidebar_position: 11
---

# Local Filesystem Storage

Clumoove can read and write files directly on the server's local storage.

:::note Tenant Isolation & Platform Notes
- **Tenant Isolation**: On Unix hosts, operations are strictly scoped inside `LOCAL_STORAGE_ROOT/users/<user-id>` using component-by-component `O_NOFOLLOW` openat traversal to prevent symlink race conditions.
- **UI Visibility**: The **Local Storage** option is enabled in the web interface (`local_storage_enabled`) only when `LOCAL_STORAGE_ROOT` is configured in `.env`.
- **Windows Host Restriction**: Local storage file mutations are disabled on Windows hosts pending an equivalent handle-relative implementation.
:::

## Configuration

Set the storage root in your `.env` file:

```env
LOCAL_STORAGE_ROOT=/clumoove
LOCAL_STORAGE_HOST_PATH=./local-storage
```

