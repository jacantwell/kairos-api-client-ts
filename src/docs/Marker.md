# Marker


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**journey_id** | **string** |  | [default to undefined]
**marker_type** | **string** |  | [default to undefined]
**coordinates** | [**Coordinates**](Coordinates.md) |  | [default to undefined]
**timestamp** | **string** |  | [optional] [default to undefined]
**estimated_time** | **string** |  | [optional] [default to undefined]
**notes** | **string** |  | [optional] [default to '']
**created_at** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Marker } from './api';

const instance: Marker = {
    _id,
    name,
    journey_id,
    marker_type,
    coordinates,
    timestamp,
    estimated_time,
    notes,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
