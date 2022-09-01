import Api from './Api';

export const createModele = (data) => Api.post('/modele', data).then(res =>  res.data.data);
export const getModele = (id) => Api.get('/modele/'+ id).then(res => res.data.data);
export const getModeles = () => Api.get('/modele').then(res => res.data.data);
export const updateModele = (id, data) => Api.patch('/modele/'+ id, data).then(res => res.data.data);
export const deleteModele = (id) => Api.delete('/modele/'+ id).then(res => res.data.data);