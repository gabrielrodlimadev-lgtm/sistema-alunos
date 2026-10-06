const readlineSync = require('readline-sync');

let alunos = [];

let funcionado = true;

while (funcionado) {
    console.log(`
        ---------------------------
             Sistema de Alunos        
        ---------------------------
        1 - Cadastrar aluno
        2 - Listar alunos
        3 - Consultar aluno
        4 - Ver situação dos alunos
        5 - Fechar sistema
        ---------------------------
        `);

    let opcao = readlineSync.question("Escolha uma opcao: ");

    switch (opcao) {
        case "1":
            console.log(`
                
            --- Cadastrar Aluno---
                
                `)
            let nome = readlineSync.question("Nome: ")
            if (nome.trim() === "" ) {
                console.log(`
                    
                    O nome não pode ficar vazio!
                    
                    `)
                break;
            }
            let idadeTexto = readlineSync.question("Idade: ");
            if (idadeTexto.trim() === "" ) {
                console.log(`
                    
                    A idade não pode ficar vazia!
                    
                    `);
                break;
            }
            let idade = Number(idadeTexto);
            if ( !Number.isInteger(idade) || idade <= 0 ) {
                console.log(`
                    
                    Digite uma idade inteira maior que zero!
                    
                    `);
                break;
            }
            let notaTexto = readlineSync.question("Nota: ");
            if ( notaTexto.trim() === "" ) {
                console.log(`
                    
                    A nota não pode ficar vazia!
                    
                    `)
                break;
            }
            let nota = Number(notaTexto);
            if ( nota >= 0 && nota <= 10 ) {
                console.log(`
                    
                    Nota válida!
                    
                    `);
                let aluno = {
                    nome: nome,
                    idade: idade,
                    nota: nota
                };
            alunos.push(aluno);
            } else {
                console.log(`
                    
                    Nota inválida! Digite um valor entre 0 e 10!
                    
                    `);
            }
            break;
        case "2":
            console.log(`
                
            --- Alunos Cadastrados ---
                
                `);
            if ( alunos.length === 0 ) {
                console.log(`
                    
                    Nenhum aluno cadastrado!
                    
                    `);
            } else {
                for ( let i = 0; i < alunos.length; i++) {
            console.log(`
                
                Nome: ${alunos[i].nome}
                Idade: ${alunos[i].idade}
                Nota: ${alunos[i].nota}

                `);
                }
            }
            break;
        case "3":
            console.log(`
                
            --- Consultar aluno ---
                
                `);
            let nomeBusca = readlineSync.question("Digite o nome: ");
            let alunoEncontrado = false;
            for ( let i = 0; i < alunos.length; i++ ) {
                if ( alunos[i].nome.trim().toLowerCase() === nomeBusca.trim().toLowerCase() ) {
                    console.log(`
                        
                        Aluno encontrado!
                        
                        `);
                    console.log(`
                Nome: ${alunos[i].nome}
                Idade: ${alunos[i].idade}
                Nota: ${alunos[i].nota}
                `);
                alunoEncontrado = true;
                break;
                }
            }
            if (!alunoEncontrado) {
                console.log(`
                    
                    Aluno não encontrado! 
                    
                    `);
            }
            break;
        case "4":
            console.log(`
                
            --- Situação do aluno ---
                
                `)
            if ( alunos.length === 0 ) {
                console.log(`
                    
                    Nenhum aluno cadastrado!
                    
                    `)
            } else {
            for ( let i = 0; i < alunos.length; i++ ) {
                if ( alunos[i].nota >= 7 ) {
                    console.log(`
                        
                        Nome: ${alunos[i].nome}
                        Situação: Aprovado
                        Nota: ${alunos[i].nota}

                        `);
                } else if ( alunos[i].nota >= 5 ) {
                    console.log(`
                        
                        Nome: ${alunos[i].nome}
                        Situação: Recuperação
                        Nota: ${alunos[i].nota}
                        
                        `);
                } else {
                    console.log(`
                        
                        Nome: ${alunos[i].nome}
                        Situação: Reprovado
                        Nota: ${alunos[i].nota}
                       
                        `);
                }
            }
            }
            break;
        case "5":
            console.log(`
                
            Sistema encerrado!
                
                `);
            funcionado = false;
            break;
        default:
            console.log(`
                
            Opção invalida!
                
                `);
            break;
    
}
}