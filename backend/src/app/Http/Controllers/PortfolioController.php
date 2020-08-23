<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\Portfolio;
use App\Http\Requests\StorePortfolio;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $portfolios = Portfolio::orderBy('updated_at', 'desc')->paginate(20);
        return response()->json($portfolios, 200, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePortfolio $request)
    {
        $inserted = Portfolio::create($request->all());
        return response()->json([
            'message' => 'Portfolio added successfully.',
            'data' => $inserted
        ], 201, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $portfolio = Portfolio::find($id);
        if ($portfolio) {
            return response()->json($portfolio, 200, [], JSON_UNESCAPED_UNICODE);
        } else {
            return response()->json([
                'message' => 'Portfolio not found.',
            ], 404, [], JSON_UNESCAPED_UNICODE);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StorePortfolio $request, $id)
    {
        $update = [
            'title' => $request->title,
            'url' => $request->url,
            'image_url' => $request->image_url
        ];
        $portfolio = Portfolio::where('id', $id)->update($update);
        if ($portfolio) {
            return response()->json([
                'message' => 'Portfolio updated successfully',
                'affected' => $portfolio,
                'data' => $update
            ], 200, [], JSON_UNESCAPED_UNICODE);
        } else {
            return response()->json([
                'message' => 'Portfolio not found',
            ], 404, [], JSON_UNESCAPED_UNICODE);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $portfolio = Portfolio::where('id', $id)->delete();
        if ($portfolio) {
            return response()->json([
                'message' => 'Portfolio deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Portfolio not found',
            ], 404, [], JSON_UNESCAPED_UNICODE);
        }
    }
}
