import React, { useState } from 'react';
import '../pages-css/CriarGrupo.css';
import Estrela from '../assets/Estrelas/Estrela_grande_branca.png';
import BarraDePesquisa from '../components/BarraDePesquisa';
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik';
import api from '../services/api'

import * as Yup from 'yup';

function CriarGrupo() {
  const criar = "Criar Grupo";

  const [groupState, setGroupState] = useState(false);
  
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('O nome do grupo é obrigatório'),
    description: Yup.string(),
    location: Yup.string().required('Localização do grupo é obrigatório'),
    privacy: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      location: '',
      privacy: 'false',
    },
    validationSchema,
    onSubmit: (values) => {
      api.post('/grupos', values)
      .then(() => {
        navigate('/grupo');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar grupo:', error);
      })
    }
  })

return (
  <div className="criar-grupo-menu">
    <BarraDePesquisa />

    <div className="criar-grupo-container">
      <div className="criar-grupo-info">
        <img src={Estrela} alt="estrela_branca" />
        <h2>{criar}</h2>

      </div>
    </div >

    <form onSubmit={formik.handleSubmit}>
    <div className='form-div'>
        <label>Nome do grupo</label> 
        <input type="text"
        id="name" 
        placeholder=" "
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required/>
    </div>

    <div className='form-div'>
      <label>Privacidade</label>
      <div className="radio-options">
        <input
          type="radio"
          name="privacy"
          value="false"
          checked={formik.values.privacy === 'false'}
          onChange={formik.handleChange}
        />
      
        <label htmlFor="public">Público</label>
        <input
          type="radio"
          name="privacy"
          value="true"
          checked={formik.values.privacy === 'true'}
          onChange={formik.handleChange}
        />
        <label htmlFor="private">Privado</label>
      </div>


    </div>
   
    <div className='form-div'  >
        <label>Descrição</label>
        <input type="text" placeholder="  "
        id="description"
        name="description" 
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
    </div>

    <div className='form-div'  >
        <label>Localidade do Grupo</label>
        <input type="text" placeholder="  "
        id="location"
        name="location" 
        value={formik.values.location}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required/>
    </div>

    <div>
        <input type='submit' value='Salvar'/>
    </div>
    
    </form>
   
  </div>
);

}

export default CriarGrupo;