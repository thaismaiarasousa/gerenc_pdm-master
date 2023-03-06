from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Create your views here.
def home(request):
    return render(request, 'home.html')

# Formulário de cadastro de usuários
def create(request):
    return render(request, 'create.html')

#Inserção dos dados do usuário no BD
def store(request):
    data = {}
    if(request.POST['password'] != request.POST['password-conf']):
        data['msg'] = 'As duas senhas não coincidem. Escreva novamente!'
        data['class']= 'alert-danger'    
        
    else:
        user = User.objects.create_user(request.POST['user'], request.POST['email'], request.POST['password'])
        data['msg'] = 'Usuário cadastrado com sucesso!'
        data['class']= 'alert-sucess' 
            
    return render(request, 'create.html', data)

# Formulário de login de usuários
def painel(request):
    return render(request, 'painel.html')

# Processa o login
def dologin(request):
    data={}
    user = authenticate(username=request.POST['user'], password=request.POST['password'])
    if user is not None:
        #autenticação backend das credenciais
        login(request,user)
        return redirect('/dashboard/')
    else:
        data['msg'] = 'Usuário ou senha inválidos!'
        data['class'] = 'alert-danger'
        return render(request, 'painel.html',data)

# Página inicial do dashboard
@login_required(login_url='/painel/')
def dashboard(request):
    if not request.user.is_authenticated:
        return redirect('/painel/')
    return render(request, 'dashboard/home.html')

# Logout do sistema
def logouts(request):
    logout(request)
    return redirect('/painel/')




# Alterar a senha
def changePassword(request):   
    user = User.objects.get(email=request.user.email)
    user.set_password('111')
    user.save()
    logout(request)
    return redirect('/painel/')

