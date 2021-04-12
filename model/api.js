class MapApi {
    static REST_KEY = 'kxsamg3wm581geh3jub4hfhjlw2nv1sr';
    constructor(params, customConfig) {
        this.customConfig = customConfig
        this.params = params
    }
    createApi(apiType) {
        switch (apiType) {
            case "Distance":
                return new DistanceApi(this.customConfig, MapApi.REST_KEY, this.params).generateUrl()
                break;
            case "TextSearch":
                return new TextSearchApi( this.params).generateUrl()
                break;
            default:
                console.log("type is needed")
        }
    }
}


class DistanceApi {
    static defaultConfig = {
        steps: true,
        rtype: 1,
        resource: 'route_adv',
        alernatives: true
    }
    static baseUrl = 'https://apis.mapmyindia.com/advancedmaps/v1/'
    constructor(config = DistanceApi.defaultConfig, REST_KEY, params) {
        this.config = config
        this.REST_KEY = REST_KEY
        this.params = params
    }
    generateUrl = () => {
        const url = `${DistanceApi.baseUrl}${this.REST_KEY}/${this.config.resource}/${this.params.profile}/${this.params.startingPoint};${this.params.endingPoint}?steps=${this.config.steps}&alternatives=${this.config.alernatives}&rtype=${this.config.rtype}`
        return URL
    }
}


class TextSearchApi {

    static baseUrl = 'https://atlas.mapmyindia.com/api/places/textsearch/json'
    constructor( params) {
        this.params = params
    }

    generateUrl = () => {
        const url = `${TextSearchApi.baseUrl}?query=${this.params.query}&region=${this.params.region}&location=${this.params.location}`
        return url
    }
}

var access_Token = {
    "access_token": "9232f8c6-e6fd-4f8f-b999-dd2af8b10e0c",
    "token_type": "bearer",
    "expires_in": 86390,
    "scope": "READ",
    
    "project_code": "prj1617295869i289003205",
    "client_id": "33OkryzDZsJgAgt1BZDGrN7cQbbyCixSkaq5yLyn1Cv7IKjuAsEdJCYJO_qJAV3vWazBS-Fu3iXgL8OLs0-iR9WOFEVdEHqFn3bIQMiot2R4uFFmEU3l-g=="
}

module.exports = MapApi;