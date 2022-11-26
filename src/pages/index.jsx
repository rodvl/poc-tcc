import React, {useState} from 'react';
import {executeCommand} from '../utils/runner';

const MainPage = () => {
    const [folderPath, setFolderPath] = useState('');
    const [projectName, setProjectName] = useState('');
    const handleCreateProject = () => {
        console.log(folderPath);
        executeCommand(`cd ${folderPath} && npx create-react-app@latest ${projectName}`);
    };

    return (
        <>
            <p>Coloque o caminho de conde deja iniciar o projeto</p>
            <input
                id="path-picker"
                value={folderPath}
                onChange={(e) => setFolderPath(e.target.value)}
            />
            <p>Digite o nome do projeto</p>
            <input
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
            />
            <button onClick={handleCreateProject}>Criar</button>
        </>
    )
}

export default MainPage