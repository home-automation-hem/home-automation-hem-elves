import * as React from 'react';
import SceneComposer from '../../src/components/scenes/SceneComposer';

export default function Test() {
  let devices = [
    {
      "id": 1,
      "name": "Lightbulb",
      "iconUrl": "/images/plug.svg",
      "roomId": 1,
      "userId": 1
    },
    {
      "id": 2,
      "name": "Air Conditioner",
      "iconUrl": "/images/plug.svg",
      "roomId": 1,
      "userId": 1
    },
    {
      "id": 3,
      "name": "Eletctric Switch",
      "iconUrl": "/images/bulb.svg",
      "roomId": 1,
      "userId": 1
    },
    {
      "id": 4,
      "name": "Water Heater",
      "iconUrl": "/images/bulb.svg",
      "roomId": 3,
      "userId": 1
    }
  ]

  let rooms =  [
    {
      "name": "Living Room",
      "type": "living-room",
      "id": 1,
      "propertyId": 1,
      "userId": 1
    },
    {
      "name": "Bedroom",
      "type": "bedroom",
      "id": 2,
      "propertyId": 1,
      "userId": 1
    },
    {
      "name": "Bathroom",
      "type": "bathroom",
      "id": 3,
      "propertyId": 1,
      "userId": 1
    },
    {
      "name": "Toilet",
      "type": "toilet",
      "id": 4,
      "propertyId": 1,
      "userId": 1
    },
    {
      "name": "Patio",
      "type": "patio",
      "id": 5,
      "propertyId": 1,
      "userId": 1
    }
  ]

  return (
    <div>
        <SceneComposer
          devices={devices}
          rooms={rooms}
        />
    </div>
  );
}
