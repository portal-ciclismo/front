import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BarraDePesquisa from '../components/BarraDePesquisa';
import '../pages/Events';

import '../pages-css/RegistroEvento.css';

import api from '../services/api';

function CadastroEvento() {
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('O nome é obrigatório'),
        data: Yup.date().required('A data é obrigatória'),
        localDePartida: Yup.string().required('O local de partida é obrigatório'),
        localDeChegada: Yup.string().required('O local de chegada é obrigatório'),
        nivel: Yup.string().required('O nível é obrigatório'),
        velocidadeMedia: Yup.string().required('A velocidade média é obrigatória'),
        descricao: Yup.string().required('A descrição é obrigatória'),
    });

    const formik = useFormik({
        initialValues: {
            nome: '',
            data: '',
            localDePartida: '',
            localDeChegada: '',
            nivel: '',
            velocidadeMedia: '',
            descricao: '',
        },
        validationSchema,
        onSubmit: (values) => {
            api.post('/registro-eventos', values)
                .then(() => {
                    navigate('/home');
                })
                .catch((error) => {
                    console.error('Erro ao cadastrar evento:', error);
                });
        },
    });
    return (
        <div className='container-cadastro-evento'>
            <BarraDePesquisa />
            <main className='main-content-cadastro-evento'>
                <form className='form-cadastro-evento' onSubmit={formik.handleSubmit}>
                    <h1>Cadastro de Eventos</h1>
                    <div className="form-group">
                        <label htmlFor="nome">Nome do Evento</label>
                        <input
                            type="text"
                            id="nome"
                            placeholder='Nome do Evento'
                            name="nome"
                            value={formik.values.nome}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.participantes && formik.errors.participantes && (
                            <div className="error-box">
                                <span className="error-text">{formik.errors.participantes}</span>
                                <span className="close-icon"
                                    onClick={() => formik.setFieldError('nome', '')}>X</span>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="data">Data do Evento</label>
                        <input
                            type="datetime-local"
                            id="data"
                            name="data"
                            value={formik.values.data}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.data && formik.errors.data && (
                            <div className="error-box">
                                <span className="error-text">{formik.errors.data}</span>
                                <span className="close-icon" onClick={() => formik.setFieldError('data', '')}>X</span>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="participantes">Participantes</label>
                        <input
                            type="text"
                            id="participantes"
                            placeholder='Participantes'
                            name="participantes"
                            value={formik.values.participantes}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.participantes && formik.errors.participantes && (
                            <div className="error-box">
                                <span className="error-text">{formik.errors.participantes}</span>
                                <span className="close-icon" onClick={() => formik.setFieldError('participantes', '')}>X</span>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="localDePartida">Local de Partida</label>
                        <input
                            type="text"
                            id="localDePartida"
                            placeholder='Local de Partida'
                            name="localDePartida"
                            value={formik.values.localDePartida}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.localDePartida && formik.errors.localDePartida && (
                            <div className="error-box">
                                <span className="error-text">{formik.errors.localDePartida}</span>
                                <span className="close-icon" onClick={() => formik.setFieldError('localDePartida', '')}>X</span>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="localDeChegada">Local de Chegada</label>
                        <input
                            type="text"
                            id="localDeChegada"
                            placeholder='Local de Chegada'
                            name="localDeChegada"
                            value={formik.values.localDeChegada}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.localDeChegada && formik.errors.localDeChegada && (
                            <div className="error-box">
                                <span className="error-text">{formik.errors.localDeChegada}</span>
                                <span className="close-icon" onClick={() => formik.setFieldError('localDeChegada', '')}>X</span>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor='nivel'>Nível</label>
                        <label htmlFor="nivel-amador">
                            <input
                                type="radio"
                                id="nivel"
                                placeholder='Nível'
                                name="nivel"
                                value="amador"
                                checked={formik.values.nivel === "amador"}
                                onChange={() => formik.setFieldValue(
                                    "nivel",
                                    formik.values.nivel === "amador" ? "" : "amador"
                                )}
                            />Amador</label>
                        <label htmlFor="nivel-pro">
                            <input
                                type="radio"
                                id="nivel"
                                placeholder='Nível'
                                name="nivel"
                                value="amador"
                                checked={formik.values.nivel === "profissional"}
                                onChange={() => formik.setFieldValue(
                                    "nivel",
                                    formik.values.nivel === "profissional" ? "" : "profissional"
                                )}
                            />Profissional</label>
                        {formik.touched.nivel && formik.errors.nivel && (
                            <div className="error-box">
                                <span className="error-text">{formik.errors.nivel}</span>
                                <span className="close-icon" onClick={() => formik.setFieldError('nivel', '')}>X</span>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="velocidadeMedia">Velocidade Média</label>
                        <input
                            type="text"
                            id="velocidadeMedia"
                            placeholder='Velocidade Média'
                            name="velocidadeMedia"
                            value={formik.values.velocidadeMedia}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.velocidadeMedia && formik.errors.velocidadeMedia && (
                            <div className="error-box">
                                <span className="error-text">{formik.errors.velocidadeMedia}</span>
                                <span className="close-icon" onClick={() => formik.setFieldError('velocidadeMedia', '')}>X</span>
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea
                            id="descricao"
                            placeholder='Descrição'
                            name="descricao"
                            value={formik.values.descricao}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.descricao && formik.errors.descricao && (
                            <div className="error-box">
                                <span className="error-text">{formik.errors.descricao}</span>
                                <span className="close-icon" onClick={() => formik.setFieldError('descricao', '')}>X</span>
                            </div>
                        )}
                    </div>
                    <button className='button-cadastro-evento' type="submit" onSubmit={formik.handleSubmit}>Cadastrar Evento</button>
                </form>
            </main>

        </div>
    )
}

export default CadastroEvento;