import { ApiClient, Response } from './ApiClient';

class DeploymentApi extends ApiClient {
  constructor() {
    super(`${process.env.BASE_URL}api/deployment`);
  }

  getVersions = (): Response<{ errors?: string[]; data: { scyllaVersions: ScyllaVersion[] } }> =>
    this.get(`/scylla-versions`);

  getCloudProviders = (): Response<{ errors?: string[]; data: { cloudProviders: CloudProvider[] } }> =>
    this.get(`/cloud-providers`);

  getRegions = (cloudProviderId: number = 1): Response<{ errors?: string[]; data: { regions: Region[] } }> =>
    this.get(`/cloud-provider/${cloudProviderId}/regions`);

  getInstances = (
    cloudProviderId: number = 1,
    regionId: number = 1,
  ): Response<{ errors?: string[]; data: { instances: Instance[] } }> =>
    this.get(`/cloud-provider/${cloudProviderId}/region/${regionId}`);
}

export const deploymentApi = new DeploymentApi();

export interface ScyllaVersion {
  description: string;
  id: number;
  name: string;
  newCluster: 'DISABLED' | string;
  version: '2018.1.7' | string;
}

export interface CloudProvider {
  id: number;
  name: string;
  rootAccountId: string;
}

export interface Region {
  backupStorageGBCost: string;
  cloudProviderId: number;
  continent: string;
  dcName: string;
  externalId: string;
  fullName: string;
  id: number;
  name: string;
  trafficCrossRegionOutGBCost: string;
  trafficInternetOutGBCost: string;
  trafficSameRegionInGBCost: string;
  trafficSameRegionOutGBCost: string;
}

export interface Instance {
  cloudProviderId: number;
  costPerHour: string;
  cpuCount: number;
  displayOrder: number;
  environment: string;
  externalId: string;
  externalStorageNetworkSpeed: number;
  freeTierHours: number;
  groupDefault: boolean;
  id: number;
  instanceCostHourly: string;
  instanceFamily: string;
  licenseCostOnDemandPerHour: string;
  localDiskCount: number;
  memory: number;
  networkSpeed: number;
  subscriptionCostHourly: string;
  totalStorage: number;
}
