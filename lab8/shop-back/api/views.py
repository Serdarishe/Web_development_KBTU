from django.http import JsonResponse, Http404
from .models import Product, Category

def product_list(request):
    products = Product.objects.all().values('id', 'name', 'price', 'description', 'count', 'is_active', 'category_id')
    return JsonResponse(list(products), safe=False)

def product_detail(request, id):
    product = Product.objects.filter(id=id).values('id', 'name', 'price', 'description', 'count', 'is_active', 'category_id').first()
    if not product:
        raise Http404
    return JsonResponse(product)

def category_list(request):
    categories = Category.objects.all().values('id', 'name')
    return JsonResponse(list(categories), safe=False)

def category_detail(request, id):
    category = Category.objects.filter(id=id).values('id', 'name').first()
    if not category:
        raise Http404
    return JsonResponse(category)

def category_products(request, id):
    products = Product.objects.filter(category_id=id).values('id', 'name', 'price', 'description', 'count', 'is_active', 'category_id')
    return JsonResponse(list(products), safe=False)