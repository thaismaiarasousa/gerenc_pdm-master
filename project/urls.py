from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from app.views import home, create, store, painel, dologin, dashboard, logouts, changePassword, listar_aulas

urlpatterns = [
    path("admin/", admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('accounts/google/login', auth_views.LoginView.as_view(template_name='login.html'), {'template_name': 'login.html'}, name='login'),
    path('accounts/google/login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('accounts/google/login/callback/', auth_views.LoginView.as_view(template_name='login.html'), name='login_callback'),
    path("home/", home),
    path("create/", create),
    path("store/", store),
    path("painel/", painel),
    path("dologin/", dologin),
    path("dashboard/", dashboard),  
    path("logouts/", logouts),  
    path("changePassword/", changePassword),  
]

urlpatterns += [
    path('dashboard/listar_aulas/', listar_aulas, name='listar_aulas'),
]
