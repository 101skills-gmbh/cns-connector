import axios from "axios";
import qs from "qs";
import { ConnectorConfig } from "./ConnectorConfig";
import { AccountEndpoint, FilesEndpoint, MessagesEndpoint, MonitoringEndpoint, RelationshipsEndpoint, RelationshipTemplatesEndpoint, TokensEndpoint } from "./endpoints";

export class ConnectorClient {
    public readonly account: AccountEndpoint;
    public readonly files: FilesEndpoint;
    public readonly messages: MessagesEndpoint;
    public readonly monitoring: MonitoringEndpoint;
    public readonly relationships: RelationshipsEndpoint;
    public readonly relationshipTemplates: RelationshipTemplatesEndpoint;
    public readonly tokens: TokensEndpoint;

    private constructor(config: ConnectorConfig) {
        const axiosInstance = axios.create({
            baseURL: config.baseUrl,
            headers: {
                "X-API-KEY": config.apiKey // eslint-disable-line @typescript-eslint/naming-convention
            },
            httpAgent: config.httpAgent,
            httpsAgent: config.httpsAgent,
            validateStatus: (_) => true,
            paramsSerializer: (params) => {
                return qs.stringify(params, {
                    arrayFormat: "repeat",
                    allowDots: true
                });
            }
        });

        this.account = new AccountEndpoint(axiosInstance);
        this.files = new FilesEndpoint(axiosInstance);
        this.messages = new MessagesEndpoint(axiosInstance);
        this.monitoring = new MonitoringEndpoint(axiosInstance);
        this.relationships = new RelationshipsEndpoint(axiosInstance);
        this.relationshipTemplates = new RelationshipTemplatesEndpoint(axiosInstance);
        this.tokens = new TokensEndpoint(axiosInstance);
    }

    public static create(config: ConnectorConfig): ConnectorClient {
        return new ConnectorClient(config);
    }
}
