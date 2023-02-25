---
id: Oracle Cloud
sidebar_position: 1
description: Oracle Cloud
---

## Architecture

### Regions

Oracle Cloud Infrastructure is physically hosted in regions and availability domains. A region is a localized geographic area, and an availability domain is one or more data centers located within a region. Oracle cloud regions are globally distributed data centers that provide secure, high-performance, local environments. These regions allow businesses to move, build, and run all workloads in the cloud from infrastructure to applications, while meeting regional data regulations.

### Availability Domains

Availability domains are isolated from each other, fault tolerant, and very unlikely to fail simultaneously or be impacted by the failure of another availability domain. When you configure your cloud services, use multiple availability domains to ensure high availability and to protect against resource failure. Be aware that some resources must be created within the same availability domain, such as an instance and the storage volume attached to it.

### Fault Domains

A fault domain is a grouping of hardware and infrastructure within an availability domain. Each availability domain contains three fault domains. Fault domains provide anti-affinity: they let you distribute your instances so that the instances are not on the same physical hardware within a single availability domain. A hardware failure or Compute hardware maintenance event that affects one fault domain does not affect instances in other fault domains.

### Realms

A realm is a logical collection of regions. Realms are isolated from each other and do not share any data. Your tenancy exists in a single realm and has access to the regions that belong to that realm.

## Identity and Access Management (IAM) - Components

### Resource

The cloud objects that your company's employees create and use when interacting with Oracle cloud infrastructure. For example,compute instances, block storage volumes, virtual cloud networks (VCN), subnets, route tables etc.

### User

An individual employee or system that needs to manage or use your companies Oracle cloud infrastructure resources. Users might need to launch instances, manage remote disks, work with your virtual cloud network, etc.End uses of your application are not typically IAM users. Users have one or more IAM credentials (Ex: Console password, API signing key, SMTP Credentials, IAM Database password).

### Group

A collection of users who all need the same type of access to a particular set of resources or compartment.

### Dynamic Group

A special type of group that contains resources (such as compute instances) that match rules that you define (thus the membership can change dynamically as matching resources are created or deleted). These instances act as "principal" actors and can make API calls to services according to policies that you write for the dynamic group.

### Network Source

A group of IP addresses that are allowed to access resources in your tenancy. The IP addresses can be public IP addresses or IP addresses from a VCN within your tenancy. After you create the network source, you use policy to restrict access to only requests that originate from the IPs in the network source.

### Compartment

A compartment is a collection of related resources (such as cloud networks, compute instances, or block volumes). Compartments are a fundamental component of Oracle Cloud Infrastructure for organizing and isolating your cloud resources. You use them to clearly separate resources for the purposes of measuring usage, billing, access and isolation. A common approach is to create a compartment for each major part of your organization. A compartment should be thought of as a logical group and not a physical container. When you begin working with resources in the Console, the compartment acts as a filter for what you are viewing.

When you sign up for Oracle Cloud Infrastructure, Oracle creates your tenancy, which is the root compartment that holds all your cloud resources. You then create additional compartments within the tenancy (root compartment) and corresponding policies to control access to the resources in each compartment. When you create a cloud resource such as an instance, block volume, or cloud network, you must specify to which compartment you want the resource to belong.
Ultimately, the goal is to ensure that each person has access to only the resources they need.

If your organization is small, or if you are still in the proof-of-concept stage of evaluating Oracle Cloud Infrastructure, you might consider placing all of your resources in the root compartment (tenancy). This approach makes it easy for you to quickly view and manage all your resources. You can still write policies and create groups to restrict permissions on specific resources to only the users who need access.

(Best practice) Create a sandbox compartment. Even though your plan is to maintain your resources in the root compartment, Oracle recommends setting up a sandbox compartment so that you can give users a dedicated space to try out features. In the sandbox compartment you can grant users permissions to create and manage resources, while maintaining stricter permissions on the resources in your tenancy (root) compartment.

### Tenancy

When you sign up or subscribe to Oracle Cloud services, Oracle creates a tenancy for you. You can think of the tenancy as your account, but it is also a secure and isolated partition within Oracle Cloud Infrastructure where you can create, organize, and administer your cloud resources. When you sign up, your tenancy is created in your home region, but you can subscribe your tenancy to as many regions as you need. Large organizations can have multiple tenancies.

The root compartment that contains all of your organization's Oracle Cloud Infrastructure resources. Oracle automatically creates your company's tenancy for you. Directly within the tenancy are your IAM entities (users, groups, compartments, and some policies; you can also put policies into compartments inside the tenancy). You place the other types of cloud resources (e.g., instances, virtual networks, block storage volumes, etc.) inside the compartments that you create.

### Policy

A document that specifies who can access which resources, and how. Access is granted at the group and compartment level, which means you can write a policy that gives a group a specific type of access within a specific compartment, or to the tenancy itself. If you give a group access to the tenancy, the group automatically gets the same type of access to all the compartments inside the tenancy.

### Identity Domain

An identity domain is a container for managing users and roles, federating and provisioning of users, secure application integration through Oracle Single Sign-On (SSO) configuration, and OAuth administration.

### Home Region

The region where your IAM resources reside. All IAM resources are global and available across all regions, but the master set of definitions reside in a single region, the home region. You must make changes to your IAM resources in your home region. The changes will be automatically propagated to all regions.

### Federation

A relationship that an administrator configures between an identity provider and a service provider. When you federate Oracle Cloud Infrastructure with an identity provider, you manage users and groups in the identity provider. You manage authorization in Oracle Cloud Infrastructure's IAM service. Oracle Cloud Infrastructure tenancies are federated with Oracle Identity Cloud Service by default.

### OCID

Every Oracle Cloud Infrastructure resource has an Oracle-assigned unique ID called an Oracle Cloud Identifier (OCID). This ID is included as part of the resource's information in both the Console and API.

### Security Zone

Security Zones let you be confident that your Compute, Networking, Object Storage, Database, and other resources comply with Oracle security principles and best practices. A security zone is associated with one or more compartments  and a security zone recipe. When you create and update resources in a security zone, Oracle Cloud Infrastructure validates these operations against security zone policies in the zone's recipe. If any security zone policy is violated, then the operation is denied.

## Core Services

### VCN

A virtual cloud network is a virtual version of a traditional network—including subnets, route tables, and gateways—on which your instances run. A cloud network resides within a single region but includes all the region's availability domains. Each subnet you define in the cloud network can either be in a single availability domain or span all the availability domains in the region (recommended). You need to set up at least one cloud network before you can launch instances. You can configure the cloud network with an optional internet gateway to handle public traffic, and an optional IPSec connection or FastConnect to securely extend your on-premises network.

### Instance

An instance is a compute host running in the cloud. An Oracle Cloud Infrastructure compute instance allows you to utilize hosted physical hardware, as opposed to the traditional software-based virtual machines, ensuring a high level of security and performance.

### Image

The image is a template of a virtual hard drive that defines the operating system and other software for an instance, for example, Oracle Linux. When you launch an instance, you can define its characteristics by choosing its image. Oracle provides a set of platform images you can use. You can also save an image from an instance that you have already configured to use as a template to launch more instances with the same software and customizations.

### Shape

In Compute, the shape specifies the number of CPUs and amount of memory allocated to the instance. Oracle Cloud Infrastructure offers shapes to fit various computing requirements.

### Block Volume

A block volume is a virtual disk that provides persistent block storage space for Oracle Cloud Infrastructure instances. Use a block volume just as you would a physical hard drive on your computer, for example, to store data and applications. You can detach a volume from one instance and attach it to another instance without loss of data.
