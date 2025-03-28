<?php
// Example: app/Http/Resources/FaceResource.php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FaceResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'recognized_name' => $this->recognized_name,
            'confidence' => $this->confidence,
            // You might not want to send raw embeddings, so consider omitting or formatting that data.
        ];
    }
}