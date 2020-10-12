
//escopo: até onde a variável é visível
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
}

teste()
console.log(local)

//var - escopo global ou escopo de funcao

