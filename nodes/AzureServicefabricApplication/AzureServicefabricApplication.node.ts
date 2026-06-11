import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureServicefabricApplication implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure Servicefabric Application',
		name: 'N8nDevAzureServicefabricApplication',
		icon: { light: 'file:./azure-servicefabric-application.png', dark: 'file:./azure-servicefabric-application.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure Service Fabric Resource Provider API Client',
		defaults: { name: 'Azure Servicefabric Application' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureServicefabricApplicationApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
