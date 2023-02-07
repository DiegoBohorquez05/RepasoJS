const vec1=[1,3,5,7,9]
const vec2=[2,4,6,8,9]

for(i=0;i<=vec1.length;i++){
    let cont=0
    for(j=0;j<=vec2.length;j++){
        if(vec1[i]==vec2[j]){
            cont++
        }
    }
    if(cont==0){
        console.log(vec1[i])
    }
}