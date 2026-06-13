import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureServicefabricApplicationApi implements ICredentialType {
        name = 'N8nDevAzureServicefabricApplicationApi';

        displayName = 'Azure Servicefabric Application API';

        icon: Icon = { light: 'file:../nodes/AzureServicefabricApplication/azure-servicefabric-application.png', dark: 'file:../nodes/AzureServicefabricApplication/azure-servicefabric-application.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Servicefabric Application API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
