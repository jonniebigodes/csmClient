import {
    localGetFaturas,
    externalGetFaturas,
    localGetRecibos,
    externalGetRecibos,
    localGetClientes,
    externalGetClientes,
    localGetFuncionarios,
    externalGetFuncionarios,
    localGetOcorrencias,
    externalGetOcorrencias,
    localGetTiposServico,
    externalGetTiposServico,
    localGetAllData,
    externalGetAllData
} from '../constants/ApiEndPoints';

class cmsApi{
    static getAll(){
        return new Promise((resolve,reject)=>{
            fetch(process.env.NODE_ENV !== 'production'?localGetAllData:externalGetAllData)
            .then(response=>{
                return response.json();
            })
            .then(result=>{
                
            })
            .catch(errorgetFaturas=>{
                console.log('====================================');
                console.log('There has been a problem with getAll fetch operation: ' + errorgetFaturas.message);
                console.log('====================================');
                reject(errorgetFaturas.message);
            });
        });
    }
    static getFaturas(){
        return new Promise((resolve,reject)=>{
            fetch(process.env.NODE_ENV !== 'production'?localGetFaturas:externalGetFaturas,{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            })
            .then(response=>{
                return response.json();
            })
            .then(result=>{
                if (result.id!=200){
                    reject(result.mensagem);
                }
                resolve(result);
            })
            .catch(errorgetFaturas=>{
                console.log('====================================');
                console.log('There has been a problem with getFaturas fetch operation: ' + errorgetFaturas.message);
                console.log('====================================');
                reject(errorgetFaturas.message);
            });
        });
    }
    static getRecibos(){
        return new Promise((resolve,reject)=>{
            fetch(process.env.NODE_ENV !== 'production'?localGetRecibos:externalGetRecibos,{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            })
            .then(response=>{
                return response.json();
            })
            .then(result=>{
                if (result.id!=200){
                    reject(result.mensagem);
                }
                resolve(result);
            })
            .catch(errorgetrecibos=>{
                console.log('====================================');
                console.log('There has been a problem with getRecibos fetch operation: ' + errorgetrecibos.message);
                console.log('====================================');
                reject(errorgetrecibos.message);
            });
        });
    }
    static getClientes(){
        return new Promise((resolve,reject)=>{
            fetch(process.env.NODE_ENV !== 'production'?localGetClientes:externalGetClientes,{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            })
            .then(response=>{
                
                return response.json();
            })
            .then(result=>{
                if (result.id!=200){
                    reject(result.mensagem);
                }
                resolve(result);
            })
            .catch(errorgetclientes=>{
                console.log('====================================');
                console.log('There has been a problem with getClientes fetch operation: ' + errorgetclientes.message);
                console.log('====================================');
                reject(errorgetclientes.message);
            });
        });
    }
    static getFuncionarios(){
        return new Promise((resolve,reject)=>{
            fetch(process.env.NODE_ENV !== 'production'?localGetFuncionarios:externalGetFuncionarios,{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            })
            .then(response=>{
                return response.json();
            })
            .then(result=>{
                if (result.id!=200){
                    reject(result.mensagem);
                }
                resolve(result);
            })
            .catch(errorgetfuncionarios=>{
                console.log('====================================');
                console.log('There has been a problem with getFuncionarios fetch operation: ' + errorgetfuncionarios.message);
                console.log('====================================');
                reject(errorgetfuncionarios.message);
            });
        });
    }
    static getOcorrencias(){
        return new Promise((resolve,reject)=>{
            fetch(process.env.NODE_ENV !== 'production'?localGetOcorrencias:externalGetOcorrencias,{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            })
            .then(response=>{
                return response.json();
            })
            .then(result=>{

                if (result.id!=200){
                    reject(result.mensagem);
                }
                resolve(result);
            })
            .catch(errorgetocorrencias=>{
                console.log('====================================');
                console.log('There has been a problem with getOcorrencias fetch operation: ' + errorgetocorrencias.message);
                console.log('====================================');
                reject(errorgetocorrencias.message);
            });
        });
    }
    static getTiposServico(){
        return new Promise((resolve,reject)=>{
            fetch(process.env.NODE_ENV !== 'production'?localGetTiposServico:externalGetTiposServico,{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            })
            .then(response=>{
                return response.json();
            })
            .then(result=>{
                if (result.id!=200){
                    reject(result.mensagem);
                }
                resolve(result);
            })
            .catch(errorgettiposservico=>{
                console.log('====================================');
                console.log('There has been a problem with getTiposServico fetch operation: ' + errorgettiposservico.message);
                console.log('====================================');
                reject(errorgettiposservico.message);
            });
        });
    }
}
export default cmsApi;