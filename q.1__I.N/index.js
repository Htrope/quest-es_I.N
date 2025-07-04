let a=parseFloat(prompt('Entre com o valor de a'))
let b=parseFloat(prompt('Entre com o valor de b'))
let c=parseFloat(prompt('Entre com o valor de c'))
let delta= (b*b-(4*a*c))
if(delta>0){
    let x1=(-b + Math.sqrt(delta))/2*a
    let x2=(-b - Math.sqrt(delta))/2*a
    console.log('Existem duas raízes reais e distintas: x1=',x1,'x2=',x2)
}

else if(delta==0){
    let x1=(-b + Math.sqrt(delta))/2*a
    console.log('existe uma raiz dupla, no valor de: x=',x1)
}

else{
    console.log('Não há raízes reais')
}
