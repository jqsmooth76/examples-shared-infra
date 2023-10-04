import * as pulumi from "@pulumi/pulumi";
import * as azure_native from "@pulumi/azure-native";

const acrResourceGroup = new azure_native.resources.ResourceGroup("uksshracrrg01", {
    resourceGroupName: "uksshracrrg01",
    location: "UK South",
});

const registry = new azure_native.containerregistry.Registry("uksshracr01", {
    resourceGroupName: acrResourceGroup.name,
    registryName: "uksshracr01",
    location: acrResourceGroup.location,
    sku: {
        name: "Basic",
    },
});

// Export outputs to easily grab these values later in the cli
export const registryId = registry.id;
export const registryName = registry.name;
export const resourceGroupName = acrResourceGroup.name;