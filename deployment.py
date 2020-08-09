import os 
from shutil import copy, rmtree
from distutils.dir_util import copy_tree

def main():
    os.system('docker-compose up -d')

    # build the production react bundle
    os.system('docker-compose exec frontend ng build')
    
    # copy frontend index, img, js and media to backend
    root = os.getcwd()

    frontend_index = os.path.join(root, 'frontend','dist', 'jaicataloguinew', 'index.html')
    frontend_all = os.path.join(root, 'frontend', 'dist','jaicataloguinew')
    backend_index = os.path.join(root, 'backend', 'templates')
    backend_all = os.path.join(root, 'backend', 'staticfiles')
    #rmtree(backend_all)
    copy(frontend_index, backend_index)
    copy_tree(frontend_all, backend_all)

    # collect static within the backend
    os.system('docker-compose exec backend python manage.py collectstatic --no-input')

    # stop the project
    os.system('docker-compose stop')

if __name__ == '__main__':
    main()