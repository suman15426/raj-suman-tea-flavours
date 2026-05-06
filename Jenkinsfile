pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "suman15426/raj-suman-tea-flavours:latest"
        
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/suman15426/raj-suman-tea-flavours.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credentials') {
                    docker.image("${DOCKER_IMAGE}").push()
                    }
                }
            }
        }

        
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
