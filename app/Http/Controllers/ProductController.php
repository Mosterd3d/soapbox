<?php
namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $products = Product::all()->reverse()->values();
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'stock' => 'required',
            'price' => 'required',
        ]);

        Product::create($request->all());
        $products = Product::all()->reverse()->values();
        return response()->json($products);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param $id
     * @param Request $request
     * @return JsonResponse
     */
    public function update($id, Request $request)
    {
        $product = Product::find($id);
        $request->validate([
            'name' => 'required',
            'stock' => 'required',
            'price' => 'required',
        ]);
        $product->update($request->all());

        $products = Product::all()->reverse()->values();
        return response()->json($products);

    }

    /**
     * Delete the specified resources.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function delete_product(request $request)
    {
        Product::whereIn('id', $request)->delete();

        $products = Product::all()->reverse()->values();
        return response()->json($products);
    }
}
