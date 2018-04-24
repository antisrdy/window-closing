from setuptools import setup

exec (open('window_closing/version.py').read())

setup(
    name='window_closing',
    version=__version__,
    author='antisrdy',
    packages=['window_closing'],
    include_package_data=True,
    license='MIT',
    description='Event upon window closing',
    install_requires=[]
)
