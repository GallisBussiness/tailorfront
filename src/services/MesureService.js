import Api from './Api';
export const createMesure = (data) => Api.post('/mesure', data).then(res =>  res.data.data);
export const getMesure = (id) => Api.get('/mesure/'+ id).then(res => res.data.data);
export const getMesures = () => Api.get('/mesure').then(res => res.data.data);
export const updateMesure = (id, data) => Api.patch('/mesure/'+ id, data).then(res => res.data.data);
export const deleteMesure = (id) => Api.delete('/mesure/'+ id).then(res => res.data.data);