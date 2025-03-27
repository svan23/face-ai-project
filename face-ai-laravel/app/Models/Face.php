<?php
// Example: app/Models/Face.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Face extends Model
{
    protected $fillable = ['image_id', 'recognized_name', 'confidence', 'embedding'];

    public function image()
    {
        return $this->belongsTo(Image::class);
    }
}
