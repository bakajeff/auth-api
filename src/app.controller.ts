import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AppService } from "./app.service";
import { LocalAuthGuard } from "./auth/local-auth.guard";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@UseGuards(LocalAuthGuard)
	@Post('auth/login')
	login(@Request() req) {
		return req.user;
	}
}
