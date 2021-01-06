const help = (prefix) => {
	return ` ❉─────COMANDOS STICKER─────❉\n
╔════════════════════════════════════\n
║│➸comando : *${prefix}sticker* ou *${prefix}stiker*
║│➸desc : converter imagem / gif / vídeo em adesivo
║│➸uso : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
   ════════════════════════════════════\n
║│➸comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
║│➸desc : converter imagem em adesivo removendo o fundo
║│➸uso : responder imagem ou enviar imagem com legenda\n
   ════════════════════════════════════\n
║│➸comando : *${prefix}imagem*
║│➸desc : converter adesivo em imagem
║│➸uso : responder msg com o comando\n
   ════════════════════════════════════\n
║│➸comando : *${prefix}tsticker* ou *${prefix}tstiker*
║│➸desc : converter texto em adesivo
║│➸usage : *${prefix}tsticker texto aqui*\n
╚════════════════════════════════════\n

            ❉─────COMANDO MEMES─────❉\n
            
╔════════════════════════════════════\n 
║│➸command : *${prefix}meme*
║│➸desc : imagens aleatórias de meme [english]
║│➸usage : apenas envie o comando\n
   ════════════════════════════════════\n
║│➸command : *${prefix}memeindo*
║│➸desc : random meme images [indo]
║│➸usage : just send the command\n
╚═══════════════════════════════════\n

             ❉─────COMANDOS DIFERENTE─────❉\n
             
╔════════════════════════════════════\n
║│➸comando : ${prefix}gtts
║│➸desc : Converte texto em audio
║│➸uso : ${prefix}gtts [idioma] [texto]
   ════════════════════════════════════\n
║│➸comando :${prefix}neko
║│➸desc : Envia uma imagem de uma garota-gato aleatória
║│➸uso : so enviar o comando
   ════════════════════════════════════\n
║│➸comando :${prefix}girl
║│➸desc : Envia uma imagem de uma menina aleatória
║│➸uso : so enviar o comando
   ════════════════════════════════════\n
║│➸comando :${prefix}boy
║│➸desc : Envia uma imagem de um menino aleatório
║│➸uso : so enviar o comando
   ════════════════════════════════════\n
║│➸comando :${prefix}anime
║│➸desc : Envia uma imagem de anime aleatória
║│➸uso : so enviar o comando
   ════════════════════════════════════\n
║│➸comando :${prefix}glitch
║│➸desc : Envia uma imagem de glitch com os dois textos informados
║│➸uso : ${prefix}glitch [texto1]  [texto2]
   ════════════════════════════════════\n
║│➸comando :${prefix}play
║│➸desc : enviar o link da musica
║│➸uso : ${prefix}play e a Url
   ════════════════════════════════════\n
║│➸comando :${prefix}text2img
║│➸desc : Envia uma imagem com o texto informado
║│➸uso : ${prefix}text2img [texto]
   ════════════════════════════════════\n
║│➸comando :${prefix}frase
║│➸desc : Envia uma frase filosófica/reflexiva
║│➸uso : so enviar o comando
   ════════════════════════════════════\n
║│➸comando :${prefix}simg
║│➸desc :Pesquisa uma foto referente ao texto
║│➸uso : ${prefix}simg [texto]
   ════════════════════════════════════\n
║│➸comando :${prefix}chat
║│➸desc : O bot responde sua mensagem
║│➸uso : ${prefix}chat [mensagem]
   ════════════════════════════════════\n
║│➸comando :${prefix}anime2
║│➸desc : Pesquisa o anime pela imagem
║│➸uso : marcar a ft ou enviar a ft com o comando
   ════════════════════════════════════\n
║│➸comando :${prefix}say
║│➸desc : O Bot repete o texto que foi mandado
║│➸uso : ${prefix}say [texto]
   ════════════════════════════════════\n
║│➸comando :${prefix}idiomas
║│➸desc : Manda as linguagens disponiveis para o comando! gtts!!
║│➸uso : so mandae o comando
   ════════════════════════════════════\n
║│➸command : *${prefix}prefixo*
║│➸desc : substituir prefixo
║│➸usage : *${prefix}prefixo [texto|opcional]*\nexample : *${prefix}prefixo ?*
║│➸note : Este comando só pode ser usado pelo proprietário do bot\n
╚═══════════════════════════════════\n

              ❉─────COMANDOS PARA GRUPO─────❉\n
              
╔═══════════════════════════════════\n
║│➸command : *${prefix}add*
║│➸desc : adiciona membro ao grupo
║│➸usage : *${prefix}add 5511xxxxxx*\n
║│➸note : tornar o membro do grupo como administrador do grupo!\n
   ════════════════════════════════════\n
║│➸command : *${prefix}kick*
║│➸desc : remover membros do grupo
║│➸usage : *${prefix}kick @tagmembro*\n
║│➸note : tornar o membro do grupo como administrador do grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}promover*
║│➸desc : tornar o membro do grupo como administrador do grupo
║│➸usage : *${prefix}promover @tagmembro*\n
║│➸note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
   ════════════════════════════════════\n
║│➸command : *${prefix}rebaixar*
║│➸desc :tornar o administrador do grupo como membro do grupo
║│➸usage : *${prefix}rebaixar @tagmembro*\n
║│➸note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
   ════════════════════════════════════\n
║│➸command : *${prefix}chamada*
║│➸desc : marca todos os membros do grupo, incluindo administradores também
║│➸usage : apenas envie o comando
║│➸note : Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}simih*
║│➸desc : ative o modo simi no grupo
║│➸uso : *${prefix}simih1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
║│➸nota : Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}adms*
║│➸desc : mostra todos os adms do grupo
║│➸uso : manda so o comando
║│➸nota :Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}bemvindo*
║│➸desc :usar o comando com 1 para ativar e 0 para desativar
║│➸uso : ${prefix}bemvindo 1 ou ${prefix}bemvindo 0
║│➸nota :Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}bloqueados*
║│➸desc : usar o comando para ver quantos contatos o bot bloqueou
║│➸uso : ${prefix}bloqueados 
║│➸nota :Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}clone*
║│➸desc : mandar o comando mais o @tag do membro
║│➸uso : ${prefix}clone @tag do membro
║│➸nota :Este comando pode ser usado se você for um administrador de grupo\n
   ════════════════════════════════════\n
║│➸command : *${prefix}tiktok*
║│➸desc :mandar o comando mais a url do video
║│➸uso :${prefix}tiktok www.tiktok/xxxxxxxxxxxx\n
   ════════════════════════════════════\n
║│➸command : *${prefix}tiktokstalk*
║│➸desc : mandar o comando mais o username do tiktoker
║│➸uso :${prefix}tiktokstalk bianca_....\n
════════════════════════════════════\n
║│➸command : *${prefix}clearall*
║│➸desc : o dono do bot usa para limpar todo o chat
║│➸usage : ${prefix}clearall e so esperar\n
   ════════════════════════════════════\n

                   ❉─────DONO DA GIT─────❉\n

╔═══════════════════════════════════\n
║│➸DONO DO BOT: TIO PAIN\n
║│➸CRIADOR DO MENU: TIO PAIN XD\n
║│➸NUMERO DO DONO: wa.me/5511949545217\n
║│➸DIA DE CRIAÇÃO: 04/01/2021\n
╚═══════════════════════════════════\n`
}

exports.help = help