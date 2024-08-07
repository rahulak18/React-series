
const BUY_CAKE = 'BUY_CAKE';

// Action is a plain js object having type as a mandatory property
// Action creation 
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: "Buying a cake"
    }
}