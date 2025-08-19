# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pingApiV1Get**](DefaultApi.md#pingApiV1Get) | **GET** /api/v1/ | Ping
[**pingMongodbApiV1MongodbGet**](DefaultApi.md#pingMongodbApiV1MongodbGet) | **GET** /api/v1/mongodb | Ping Mongodb


# **pingApiV1Get**
> any pingApiV1Get()

Retrieve users.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.pingApiV1Get(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pingMongodbApiV1MongodbGet**
> any pingMongodbApiV1MongodbGet()

Retrieve users.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.pingMongodbApiV1MongodbGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


