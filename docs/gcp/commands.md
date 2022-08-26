---
id: Commands
sidebar_position: 10
description: Commands
---

## Compute

| Description         | Command                                       |
| ------------------- | --------------------------------------------- |
| List Zones          | gcloud compute zones list                     |
| Search in Zone list | gcloud compute zones list \| grep us-central1 |
| Set default Zone    | gcloud config set compute/zone us-central1-c  |
| Launch new VM       | gcloud compute instances create "my-vm-2" \   |
| ping another VM     | ping my-vm-1                                  |
| SSH another VM      | ssh my-vm-1                                   |
| Curl another VM     | curl http://my-vm-1                           |
