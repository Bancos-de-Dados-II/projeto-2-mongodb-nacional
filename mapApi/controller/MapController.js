import MapaModel from "../model/mapaModel";


//export class MapController : ifazer a alteração depois
export async function criarLocalizacao(req, res){
    try{
    const mapa = new MapaModel(req.body);
    await mapa.save();
    res.status(201).json(mapa);
    return;
        
    } catch(error){
         res.status(500).json({error:'Não foi possivel cadastrar'})        }
     }
    
export async function buscarLocalizacoes(req, res) {
    try {
        const localizacoes = await MapaModel.find();
        res.status(200).json(localizacoes);
        return;
        } catch (error) {
            res.status(500).json({ error: "Não foi possível recuperar as localizações" });
        }
    }
    export async function deletarLocalizacaoPorNome(req, res) {
        const nome = req.params.nome; 
        
        try {
            const result = await MapaModel.deleteOne({ "localizacao.nome": nome });
            if (result.deletedCount > 0) {
                res.json({ message: 'Localização deletada com sucesso' });
            } else {
                res.status(404).json({ message: 'Localização não encontrada' });
            }
        } catch (error) {
         
            console.error(error);
            res.status(500).json({ message: 'Erro ao tentar deletar a localização', error: error.message });
        }
    }
    
 
    
    


  
   