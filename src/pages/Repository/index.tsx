import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './style';

import logo from '../../assets/logo.svg';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    owner: {
        avatar_url: string;
    }
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
}

interface Issue {
    id: number;
    title: string;
    user: {
        login: string;
    };
    html_url: string;
}

const Repository: React.FC = function () {

    const { params } = useRouteMatch<RepositoryParams>();
    const [ repository, setRepository ] = useState<Repository | null>(null);
    const [ issues, setIssues ] = useState<Issue[]>([]);

    const loadInfoRepository = useCallback(async function getInfoRepository (): Promise<void> {
        const [ repository, issue ] = await Promise.all([
            api.get('/repos/'+params.repository),
            api.get<Issue>('/repos/' + params.repository + '/issues'),
        ]);

        setRepository(repository.data);
        setIssues(issue.data);

    }, [ params.repository ]);

    useEffect(function(){
        loadInfoRepository();
    }, [loadInfoRepository]);

    return (
        <>
            <Header>
                <img src={ logo } alt="Github Explorer" />

                <Link to="/">
                    <FiChevronLeft size = { 20 } />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <div>
                    <img src={ repository?.owner.avatar_url } alt="avatar"/>

                    <div>
                        <strong> { repository?.full_name } </strong>
                        <p> { repository?.description } </p>
                    </div>
                </div>

                <ul>
                    <li>
                        <strong> { repository?.stargazers_count } </strong>
                        <p> Stars </p>
                    </li>

                    <li>
                        <strong> { repository?.forks_count } </strong>
                        <p> Forks </p>
                    </li>

                    <li>
                        <strong> { repository?.open_issues_count } </strong>
                        <p> Issues abertas </p>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                {issues.map(function(issue: Issue) {
                    return (
                        <a href={ issue.html_url } key = { issue.id } >
                            <div>
                                <strong> { issue.title } </strong>
                                <p>  { issue.user.login } </p>
                            </div>
                            <FiChevronRight size = { 20 } />
                        </a>
                    );
                })}

            </Issues>
        </>
    );
}

export default Repository;