interface DeleteModalProps {
  open: boolean; // Indicates if the modal is open or not
  onClose: () => void; // Function to close the modal
  onDelete: () => void; // Function to be called when delete is confirmed
}

export default function DeleteModal({
  open,
  onClose,
  onDelete,
}: DeleteModalProps) {
  const handleDelete = () => {
    onDelete(); // Call the onDelete function passed via props
    onClose(); // Close the modal after deletion
  };

  return (
    <div className="mx-auto text-center my-4 w-56">
      {/* Trash icon */}
      <Trash2 size={56} className="mx-auto text-red-500" />
      <div className="mx-auto my-4 w-48">
        {/* Title */}
        <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
        {/* Description */}
        <p className="text-sm text-gray-500">
          Are you sure you want to delete this item?
        </p>
      </div>
      {/* Buttons */}
      <div className="flex gap-4">
        {/* Delete button */}
        <button
          type="button"
          onClick={handleDelete}
          className="btn btn-danger w-full"
        >
          Delete
        </button>
        {/* Cancel button */}
        <button
          type="button"
          onClick={onClose}
          className="btn btn-light w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
