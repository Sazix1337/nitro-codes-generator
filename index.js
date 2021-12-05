nitro = () =>{
    let code = '';
    let codeText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(let i = 0; i < 18; i++){
        code = code + codeText.charAt(Math.floor(Math.random() * codeText.length));
    }
    return 'discord.gift/' + code;
}
for(let j = 0; j < 1000; j++){
  nitro();
}
