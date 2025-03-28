<?php
// Example: app/Models/Image.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ['user_id', 'file_path', 'uploaded_at'];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
