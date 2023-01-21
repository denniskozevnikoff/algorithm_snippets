const depthFirstPrint = (graph, source) => {
    const stack = [ source ];
    
    while(stack.length > 0){
        const current = stack.pop();
        //print what you pop
        console.log(current);
        
        for(let neighbor of graph[current]){
          //push neighbors to the stack
          stack.push(neighbor);
        }
        
 
    }
};

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

depthFirstPrint(graph, 'a')
