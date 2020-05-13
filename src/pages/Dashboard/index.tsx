import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Title, Form, Error, Repositories } from './style';

import logo from '../../assets/logo.svg';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = function () {

    const [ repositories, setRepositories ] = useState<Repository[]>(function () {
        const storage = localStorage.getItem('@GithubExplorer:repositories');

        if (storage) {
            return JSON.parse(storage);
        }
        else {
            return [];
        }
    });

    const [ repository, setRepository ] = useState('');
    const [ error, setError ] = useState('');

    useEffect(function () {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    }, [ repositories ]);

    const handleSubmit = useCallback(async function(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (repository) {
            try {
                const response = await api.get<Repository>('/repos/'+repository);
                const newRepository: Repository = response.data;

                setRepositories([...repositories, newRepository]);
                setRepository('');
                setError('');
            } catch (error) {
                setError('Repositório não encontrado.');
            }
        }
        else {
            setError('Digite o nome do repositório.');
        }
    }, [repository, repositories]);

    return (
        <>
            <img src={logo} alt="Github Explorer"/>

            <Title> Explore repositórios do Github </Title>

            <Form onSubmit = { handleSubmit } isError = { !!error }>
                <input
                    type="text"
                    placeholder = "Digite o nome do repositório"
                    value = { repository }
                    onChange = { function(event) {
                        setRepository(event.target.value);
                    }}
                />
                <button type="submit"> Pesquisar </button>
            </Form>

            <Error isError = { !!error }>
                <span> { error } </span>
            </Error>

            <Repositories>
                {
                    repositories.map(function (repository: Repository) {
                        return (
                            <Link to = { "/repository/" + repository.full_name } key={ repository.full_name }>
                                <img src={ repository.owner.avatar_url } alt={ repository.owner.login }/>
                                <div>
                                    <strong> { repository.full_name } </strong>
                                    <p> { repository.description } </p>
                                </div>
                                <FiChevronRight size = { 20 } />
                            </Link>
                        );
                    })
                }

            </Repositories>
        </>
    );
}

export default Dashboard;