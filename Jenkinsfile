pipeline {
    agent any

    tools {
        maven 'Maven'
    }

    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Git branch to build')
        string(name: 'BUILD_ENV', defaultValue: 'dev', description: 'Environment (dev/test/prod)')
    }

    environment {
        NEW_VERSION = "1.3.0"
    }

    stages {
        stage('Build') {
            steps {
                echo "Building version ${NEW_VERSION} on branch ${params.BRANCH_NAME}"
                // Uncomment this line to actually build:
                // bat "mvn clean package -Dversion=${NEW_VERSION}"
            }
        }

        stage('Unit Test') {
            when {
                expression { return params.BUILD_ENV == 'dev' }
            }
            steps {
                echo 'Running unit tests...'
                // Uncomment to run real tests:
                // bat "mvn test"
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying application to ${params.BUILD_ENV} environment..."
                // Example deployment command (customize this for Heroku, AWS, etc.):
                // bat "mvn deploy -P${params.BUILD_ENV}"
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            // deleteDir() // Uncomment to actually clean workspace
        }
        success {
            echo '✅ Pipeline succeeded.'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}
