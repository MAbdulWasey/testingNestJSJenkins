job('nestjs dsl-job'){
    scm{
        git('https://github.com/MAbdulWasey/testingjenkins.git'){ node -> //is hudson.plugins.git.GitSCM
        
        node / gitConfigName('DSL User')
        node / gitConfigEmail('awasey12@gmail.com')
        }
    }
    triggers{
        scm('H/5 * * * *')
    }
    wrappers{
        nodejs('NodeJS')
    }
    steps {
        shell("npm install")
    }
}