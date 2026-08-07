---
id: recurring-syncs
title: Recurring Syncs & Schedules
sidebar_position: 3
---

# Recurring Sync Jobs & Schedules

Schedule automated one-way or two-way sync jobs.

- **One-Way / Two-Way Sync**: Mirror source changes or bi-directionally reconcile files.
- **Live Bandwidth Limits**: Dynamically throttle transfer speeds (0-1000 Mbps).
- **Overlap Protection**: Prevents concurrent runs of the same sync job if a previous run is still active.

---

## Editing Existing Sync Jobs

Existing sync jobs do not need to be deleted and recreated when requirements change. In the **Sync Dashboard**, click **Edit** (pencil icon) on any job to open the configuration modal:

- **Source Paths**: Add or remove folders and files using the embedded file browser.
- **Target Directory**: Change the destination folder on the target provider.
- **Mode & Strategy**: Switch between One-Way (`one_way`) and Two-Way (`two_way`) sync, toggle delete propagation, or change collision strategies (`SKIP`, `OVERWRITE`, `RENAME`).
- **Interval & Bandwidth**: Adjust execution interval (in minutes) and live bandwidth limits (Mbps).

