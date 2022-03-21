using Microsoft.EntityFrameworkCore.Migrations;

namespace CoreDepartman.Migrations
{
    public partial class test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "departid",
                table: "personels",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_personels_departid",
                table: "personels",
                column: "departid");

            migrationBuilder.AddForeignKey(
                name: "FK_personels_departmanlars_departid",
                table: "personels",
                column: "departid",
                principalTable: "departmanlars",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_personels_departmanlars_departid",
                table: "personels");

            migrationBuilder.DropIndex(
                name: "IX_personels_departid",
                table: "personels");

            migrationBuilder.DropColumn(
                name: "departid",
                table: "personels");
        }
    }
}
