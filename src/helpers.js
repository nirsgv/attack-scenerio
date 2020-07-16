const getCurrentTasks = async (cb) => {
    const avoidCors = 'https://cors-anywhere.herokuapp.com/';
    cb(true);
    try {
        const response = await fetch (`${avoidCors}https://i3gy725noe.execute-api.us-east-1.amazonaws.com/default/VisualizatorApi`, {
                headers:{"x-api-key": "9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9"}
            }),
            data = await response.json();
        cb(false);
        return data;
    } catch (err){
        console.log(err);
        return null;
    }
};

export {getCurrentTasks};