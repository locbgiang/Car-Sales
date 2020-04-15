export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500, selected: false },
        { id: 2, name: 'Racing detail package', price: 1500, selected: false },
        { id: 3, name: 'Premium sound system', price: 500, selected: false },
        { id: 4, name: 'Rear spoiler', price: 250, selected: false }
    ]
};

export const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'ADD_FEATURE':
            return {
                ...state,
                additionalPrice: state.additionalPrice+action.payload.price,
                additionalFeatures: state.additionalFeatures.map((item)=>{
                    if(item.id===action.payload.id){
                        return{
                            ...item,
                            selected: !action.payload.selected
                        }
                    }
                    return item;
                }).filter(item=>!item.selected),
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        {
                            ...action.payload,
                            selected: !action.payload.selected
                        }
                    ]
                }
            }
        case 'REMOVE_FEATURE':
            return {
                ...state,
                additionalPrice: state.additionalPrice-action.payload.price,
                car: {
                    ...state.car,
                    features: state.car.features.map((item)=>{
                        if(item.id===action.payload.id){
                            return{
                                ...item,
                                selected: !action.payload.selected
                            }
                        }
                        return item;
                    }).filter(item=>item.selected)
                },
                additionalFeatures: [
                    ...state.additionalFeatures,
                    {
                        ...action.payload,
                        selected: !action.payload.selected
                    }
                ]
            }
    }
    return state;
}
