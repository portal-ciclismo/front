import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import BarraDePesquisa from '../components/BarraDePesquisa';

function CadastroPerfil() {
  const navigate = useNavigate();

  const initialProfileData = {
    fullName: '',
    nickname: '',
    sexo: '',
    cyclingCategory: 'AMADOR',
    location: '',
    profilePicture: null,
  };

  const profileSchema = Yup.object().shape({
    fullName: Yup.string().required('Campo obrigatório'),
    nickname: Yup.string().required('Campo obrigatório'),
    sexo: Yup.string().required('Campo obrigatório'),
    cyclingCategory: Yup.string().required('Campo obrigatório'),
    location: Yup.string().required('Campo obrigatório'),
    profilePicture: Yup.mixed(),
  });

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('fullName', values.fullName);
    formData.append('nickname', values.nickname);
    formData.append('sexo', values.sexo);
    formData.append('cyclingCategory', values.cyclingCategory);
    formData.append('location', values.location);
    formData.append('profilePicture', values.profilePicture);

    api.post('/profile', formData)
      .then((response) => {
        navigate('/perfil');
      })
      .catch((error) => {
        navigate('/perfil');
      });
  };

  return (
    <div className="cadastro-perfil">
      <BarraDePesquisa />

      <div className="form-container">
        <Formik
          initialValues={initialProfileData}
          validationSchema={profileSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-cadastro-perfil">
              <label className="form-label" htmlFor="fullName">
                Nome Completo
              </label>
              <Field type="text" name="fullName" className="form-input" />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>
            <div className="form-cadastro-perfil">
              <label className="form-label" htmlFor="nickname">
                Apelido
              </label>
              <Field type="text" name="nickname" className="form-input" />
              <ErrorMessage name="nickname" component="div" className="error" />
            </div>
            <div className="form-cadastro-perfil">
              <label className="form-label" htmlFor="sexo">
                Sexo
              </label>
              <Field type="text" name="sexo" className="form-input" />
              <ErrorMessage name="sexo" component="div" className="error" />
            </div>
            <div className="form-cadastro-perfil">
              <label className="form-label" htmlFor="cyclingCategory">
                Categoria de Ciclismo
              </label>
              <Field as="select" name="cyclingCategory" className="form-input">
                <option value="AMADOR">Amador</option>
                <option value="PROFISSIONAL">Profissional</option>
              </Field>
              <ErrorMessage name="cyclingCategory" component="div" className="error" />
            </div>
            <div className="form-cadastro-perfil">
              <label className="form-label" htmlFor="location">
                Localização
              </label>
              <Field type="text" name="location" className="form-input" />
              <ErrorMessage name="location" component="div" className="error" />
            </div>
            <div className="form-cadastro-perfil">
              <label className="form-label" htmlFor="profilePicture">
                Foto de Perfil
              </label>
              <Field type="file" name="profilePicture" accept="image/jpeg, image/jpg, image/png, image/gif" className="form-input" />
              <ErrorMessage name="profilePicture" component="div" className="error" />
            </div>
            <button type="submit" className="form-button">
              Salvar Perfil
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default CadastroPerfil;
