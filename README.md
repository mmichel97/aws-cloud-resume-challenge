# AWS Cloud Resume Challenge

Welcome to my AWS Cloud Resume Challenge project! This repository contains my solution to the Cloud Resume Challenge, demonstrating my familiarity with key AWS services and cloud engineering fundamentals.

## Overview

The objective of this challenge is to build, deploy, and host a cloud-based web resume. For my implementation, I used **Pug** as the HTML preprocessor and **SCSS** for styling, aiming to show proficiency in modern frontend tools. Additionally, I integrated AWS services to create a scalable, cloud-native infrastructure.

By implementing a **CI/CD pipeline** and using **Terraform** for infrastructure as code (IaC), this project demonstrates real-world cloud development concepts, focusing on automation, version control, and AWS best practices.

## Architecture

![Architecture Diagram](/img/AWS_cloud_diagram.png)

### AWS Services Utilized:

- **Amazon S3**: To host the static website.
- **Amazon CloudFront**: For content delivery and caching, improving website performance.
- **AWS Lambda**: To run serverless backend logic.
- **Amazon DynamoDB**: A NoSQL database to store and manage visitor count data.
- **AWS Certificate Manager**: For securing the website with HTTPS.
- **GitHub Actions**: To automate the CI/CD process.
- **Terraform**: For infrastructure provisioning and management.

## Infrastructure and CI/CD Pipeline

This project is built using **Terraform** to define and manage AWS resources, enabling consistency and scalability. The **CI/CD pipeline**, powered by **GitHub Actions**, automates deployment from the source code repository to AWS. This ensures continuous delivery of any updates or changes made to the website.
