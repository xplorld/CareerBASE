# Implementation Design

Every user has different kinds of data.

| data | stored |
|-|-|
| mnemonics | user's brain |
| private key | user's brain |
| public key | user's brain, CareerBASE |
| public data | CareerBASE, BASE Server |
| private data | BASE Server |

# Data and permissions

| User can ... | with ... | from ... |
|-|-|-|
| read anyone's public data | nothing | CareerBASE |
| write their own public data | PK | CareerBASE, BASE |
| read/write their own private data | their PK | BASE |
| read someone's private data | their PK and data owner's PK | BASE |
| view/send outgoing request | their PK and data owner's PK | BASE | 
| view/grant incoming request | their PK and requester's PK | BASE | 
